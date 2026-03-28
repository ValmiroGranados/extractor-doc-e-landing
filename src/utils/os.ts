export const detectOS = (): 'mac' | 'windows' | 'linux' | 'unknown' => {
  if (typeof window === 'undefined') return 'unknown';
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.includes('mac')) return 'mac';
  if (ua.includes('win')) return 'windows';
  if (ua.includes('linux')) return 'linux';
  return 'unknown';
};

export const getDownloadInfo = (os: ReturnType<typeof detectOS>) => {
  switch (os) {
    case 'mac': return { id: 'mac', url: '#download-mac', label: 'Descargar para Mac', icon: 'Apple' };
    case 'windows': return { id: 'win', url: '#download-win', label: 'Descargar para Windows', icon: 'Monitor' };
    case 'linux': return { id: 'linux', url: '#download-linux', label: 'Descargar para Linux', icon: 'Terminal' };
    default: return { id: 'unknown', url: '#downloads', label: 'Opciones de Descarga', icon: 'Download' };
  }
};
