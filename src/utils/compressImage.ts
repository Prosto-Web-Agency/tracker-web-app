import imageCompression from 'browser-image-compression';

export const compressImage = async (file: File | string) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  let compressedBlob;
  let base64String = file;

  if (typeof file !== 'string') {
    // Используем async/await, чтобы дождаться завершения компрессии
    compressedBlob = await imageCompression(file, options);

    // Создаем объект FileReader для чтения Blob в формат Base64
    base64String = String(await readBlobAsBase64(compressedBlob));
  }

  return String(base64String);
};

// Функция для чтения Blob в формат Base64
const readBlobAsBase64 = (blob: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      if (event.target) {
        const base64String = event.target.result;
        resolve(base64String);
      }
    };
    reader.readAsDataURL(blob);
  });
};
