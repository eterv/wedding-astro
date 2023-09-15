/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 */
function getMobileOperatingSystem() {
  const userAgent =
    navigator.userAgent || navigator.vendor || (window as any).opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) return 'Windows Phone';
  if (/android/i.test(userAgent)) return 'Android';

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream)
    return 'iOS';

  return 'unknown';
}

// export const mobileOS = getMobileOperatingSystem();

/**
 * 요소 위로 스크롤 (애니메이션)
 */
export function scrollToElement(selector: string) {
  const elDest = document.querySelector(selector);
  if (!elDest) return;

  const rect = elDest.getBoundingClientRect();

  console.log(rect);

  let top = rect.top + window.pageYOffset - 60;
  if (top < 0) top = 0;

  scrollToY(top);
}

/**
 * Y 값으로 스크롤 (애니메이션)
 */
export function scrollToY(y: number) {
  window.scrollTo({ top: y, behavior: 'smooth' });
}
