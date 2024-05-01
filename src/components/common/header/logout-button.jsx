import { swConfirm } from "@/helpers/swal";
import { MdOutlineLogout } from "react-icons/md";
import { signOut } from "../../../../auth";

const LogoutButton = () => {

    const handleLogout=async()=>{
        const res= await swConfirm("Are you sure to logout?");
        if(!res) return;
        signOut({callbackUrl:"/"})
    }   

  return (

    <Nav.Link href="/logout" onClick={handleLogout}>
        <MdOutlineLogout /> LOGOUT
    </Nav.Link>
  )
}

export default LogoutButton