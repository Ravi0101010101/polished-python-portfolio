import Swal from 'sweetalert2';
import { Howl } from 'howler';

const successSound = new Howl({ src: ['/sounds/success.mp3'] });

export const showCartoonNotification = (title: string, message: string) => {
  successSound.play();
  return Swal.fire({
    title,
    text: message,
    icon: 'success',
    showConfirmButton: false,
    timer: 2000,
    customClass: {
      popup: 'cartoon-popup',
      title: 'cartoon-title',
      container: 'cartoon-content'  // Changed from 'content' to 'container' to match SweetAlert2 types
    }
  });
};