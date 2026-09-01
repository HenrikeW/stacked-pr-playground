/**
 * Animation preference, stored as a `data-animations` attribute on <html>.
 *
 * The attribute is the single source of truth and is resolved before first
 * paint by ANIMATION_BOOT_SCRIPT (see app/layout.tsx), so animations never
 * flash on for a frame before being switched off.
 */

const STORAGE_KEY = "meerkat-manor:animations";

export type AnimationPreference = "on" | "off";

/**
 * Runs inline in <head>, before anything renders. Resolves the stored choice,
 * falling back to the OS reduced-motion setting when there isn't one, so the
 * attribute is always concrete by the time CSS is applied.
 *
 * Injected via dangerouslySetInnerHTML. That is safe here because this is a
 * build-time constant: the sole interpolation is STORAGE_KEY, a literal above,
 * and nothing from a request or a user ever reaches it. Keep it that way --
 * never interpolate a runtime value into this string.
 *
 * Caveat for later: being inline, it needs a nonce to survive a strict
 * `script-src 'self'` Content Security Policy.
 */
export const ANIMATION_BOOT_SCRIPT = `(function(){try{
var v=localStorage.getItem(${JSON.stringify(STORAGE_KEY)});
if(v!=="on"&&v!=="off"){v=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"off":"on";}
document.documentElement.setAttribute("data-animations",v);
}catch(e){}})();`;

const listeners = new Set<() => void>();
let snapshot: AnimationPreference | null = null;

function read(): AnimationPreference {
  if (snapshot === null) {
    snapshot =
      document.documentElement.getAttribute("data-animations") === "off"
        ? "off"
        : "on";
  }
  return snapshot;
}

export function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

export const getSnapshot = (): AnimationPreference => read();

/* The server cannot know the visitor's choice. It renders "on"; the client
   corrects on hydration, and the boot script has already set the attribute so
   nothing actually moves in the meantime. */
export const getServerSnapshot = (): AnimationPreference => "on";

export function toggleAnimations() {
  const next: AnimationPreference = read() === "on" ? "off" : "on";
  snapshot = next;
  document.documentElement.setAttribute("data-animations", next);
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Private mode or blocked storage: the choice just won't persist.
  }
  for (const listener of listeners) listener();
}
