import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from "../components/ui/dropdown-menu";

import { useDispatch } from "react-redux";
import {  AppDispatch } from "../../redux/store";
import { clearUser } from "../../redux/authSlice";

import avatar from "../../assets/userAvatar.jpg";

const UserAvatar = ({ name }: { name: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const logout = ()=>{
    dispatch(clearUser());
  }
  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-gray-900 text-white rounded-lg p-1 mt-2 border-0 " >
          <DropdownMenuItem className="text-purple-500 font-bold pointer-events-none">{name}</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={logout} className="cursor-pointer">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserAvatar;

