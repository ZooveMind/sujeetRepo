import { useState } from "react";
import BlogLogin from "./BlogAuth/BlogLogin";
import BlogSignup from "./BlogAuth/BlogSignup";
import BlogHome from "./BlogHome";


function Blog(){
    const [isVerified,setIsVrified] = useState(false);
    const [exist, isExist] = useState(true);
    const toggleVerify = (flag:boolean)=>{
        console.log("yess it came 4")
        setIsVrified(flag);
    }
    const toggleLogin=()=>{
        isExist(!exist);
    }
    return(
        <div>
            {isVerified?<BlogHome/>:
                (
                    <div style={{display:"flex",flexDirection:"column",width:"40%",backgroundColor:"#dcdcdc",alignItems:"center",margin:"auto",top:"20px",position:"relative"}}>
                        <button onClick={toggleLogin} style={{color:"purple",textDecoration:"underline",fontSize:"large",fontWeight:"500",margin:"10px"}}>
                            {exist?"SignUp":"Login"}</button>
                        {exist?<BlogLogin validateUser = {toggleVerify} />:<BlogSignup/>}
                    </div>
                ) 
            }
        </div>
    )
}

export default Blog;