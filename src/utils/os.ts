export const detectOS = (): 'mac' | 'windows' | 'linux' | 'unknown' => {
  if (typeof window === 'undefined') return 'unknown';
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.includes('mac')) return 'mac';
  if (ua.includes('win')) return 'windows';
  if (ua.includes('linux')) return 'linux';
  return 'unknown';
};

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  // Basic check for mobile or tablet devices
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
};

export const LINKS = {
  mac: 'https://back.storage.tools.misimpuestosco.com/index.php/s/desktopmacx64/download',
  win: 'https://back.storage.tools.misimpuestosco.com/index.php/s/desktopwin/download',
  linux: 'https://back.storage.tools.misimpuestosco.com/index.php/s/desktoplinux/download'
};

export const getDownloadInfo = (os: ReturnType<typeof detectOS>) => {
  switch (os) {
    case 'mac': return { id: 'mac', url: LINKS.mac, label: 'Descargar para Mac', icon: 'Apple' };
    case 'windows': return { id: 'win', url: LINKS.win, label: 'Descargar para Windows', icon: 'Monitor' };
    case 'linux': return { id: 'linux', url: LINKS.linux, label: 'Descargar para Linux', icon: 'Terminal' };
    default: return { id: 'unknown', url: '#downloads', label: 'Opciones de Descarga', icon: 'Download' };
  }
};
