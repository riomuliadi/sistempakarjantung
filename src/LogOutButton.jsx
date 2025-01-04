import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';
import { ExitToApp } from '@mui/icons-material';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: "Anda akan keluar dari halaman ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, keluar!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                // Aksi logout (contoh: hapus token dan redirect)
                localStorage.removeItem('token'); // Hapus token jika ada
                navigate('/login'); // Redirect ke halaman login
            }
        });
    };

    return (
        <button onClick={handleLogout} className="flex items-center w-full p-2">
            <span className="text-black">
                <ExitToApp className="ml-2 mr-7" />
                Log Out
            </span>
        </button>
    );
};

export default LogoutButton;
