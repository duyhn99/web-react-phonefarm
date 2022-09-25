import Swal from 'sweetalert2';

/**
 * Hàm show thông báo xác nhận thao tác
 * @param {String} title Tiêu đề
 * @param {String} text Nội dung thông báo
 * @param {Function} onConfirm Hàm xử lý khi người dùng nhấn "Đồng ý"
 * @param {Function} onCancel Hàm xử lý khi người dùng nhân "Huỷ"
 */
export function showMsgConfirm(
  title,
  text,
  onConfirm = () => {},
  onCancel = () => {},
) {
  Swal.fire({
    title: title,
    text: text,
    icon: 'question',
    showCancelButton: true,
    cancelButtonText: 'Hủy',
    confirmButtonText: 'Đồng ý',
    allowOutsideClick: false,
  }).then(result => {
    // Huỷ
    if (result.dismiss === 'cancel') {
      if (typeof onCancel === 'function') onCancel();
      return;
    }

    // Đồng ý
    if (typeof onConfirm === 'function') onConfirm();
  });
}

/**
 * Hàm show thông báo xác nhận thành công
 * @param {String} title Tiêu đề
 * @param {String} text Nội dung thông báo
 */
export function showMsgSuccess(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: 'success',
  });
}

/**
 * Hàm show cảnh báo
 * @param {String} title Tiêu đề
 * @param {String} text Nội dung thông báo
 */
export function showMsgWarning(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
  });
}

/**
 * Hàm show thông báo lỗi
 * @param {String} title Tiêu đề
 * @param {String} text Nội dung thông báo
 */
export function showMsgError(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: 'error',
  });
}

/**
 * Hàm show thông tin bất kỳ
 * @param {String} title Tiêu đề
 * @param {String} text Nội dung thông báo
 */
export function showMsgInfo(title, text) {
  Swal.fire({
    title: title,
    text: text,
    icon: 'info',
  });
}
