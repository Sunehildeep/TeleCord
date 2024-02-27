import Swal from "sweetalert2";

interface SweetAlertProps {
  title: string;
  text: string;
  type: "success" | "error" | "warning" | "info" | "question";
  confirmButtonText?: string;
}

const SweetAlert: React.FC<SweetAlertProps> = ({
  title,
  text,
  type,
  confirmButtonText,
}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: type,
    confirmButtonText: confirmButtonText,
  });

  return null;
};

export default SweetAlert;
