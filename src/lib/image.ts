// /lib/image-server.ts - Server-side only
import sharp from 'sharp';

export const MAX_IMAGE_UPLOAD_SIZE_CLIENT = 5 * 1024 * 1024; // 5MB

export async function compressImageServer(buffer: ArrayBuffer): Promise<Buffer> {
  const compressedBuffer = await sharp(buffer)
    .webp({ quality: 80 })
    .resize({ height: 800, withoutEnlargement: true })
    .toBuffer();
    
  return compressedBuffer;
}

// /lib/image-client.ts - Client-side only  
export const MAX_IMAGE_UPLOAD_SIZE = 5 * 1024 * 1024; // 5MB

export async function getImageBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Basic client-side validation
export function validateImageSize(file: File): boolean {
  return file.size <= MAX_IMAGE_UPLOAD_SIZE_CLIENT;
}