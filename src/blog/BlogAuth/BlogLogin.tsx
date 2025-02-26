import { useRef } from "react";
import { usersRef, getDocs, query, where, adminRef } from "./firebaseConfig.ts";

interface BlogLoginProps {
    validateUser: (flag: boolean) => void;
  }

const BlogLogin: React.FC<BlogLoginProps> = ({ validateUser }) => {
    const checkboxRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const verifyUser = async()=>{
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        if(checkboxRef.current?.checked){            
            const q = query(adminRef, where("email", "==", email), where("password", "==", password));
            const queryResult = await getDocs(q)
            if(!queryResult.empty){
                validateUser(true);
            }else{
                alert("Invalid emial or password ,kindly uncheck the checkbox if you are not Admin !!");
                validateUser(false);
            }
        }else{
            const q = query(usersRef, where("email", "==", email), where("password", "==", password));
            const queryResult = await getDocs(q);
            if(!queryResult.empty){
                validateUser(true);
            }else{
                alert("Invalid emial or password ,kindly check the checkbox if you are Admin !!");
                validateUser(false);
            }
        }
    }
  return (
    <div style={{display:"flex",flexDirection:"column",width:"45%"}}>
        <div style={{margin:5}}>
            <label htmlFor="checkbox">Admin:</label>
            <input type="checkbox" ref={checkboxRef} id="checkbox" style={{marginLeft:"35px", transform:"Scale(1.5)"}}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",margin:5}}>
            <label htmlFor="email">Email:</label>
            <input ref={emailRef} type="email" placeholder='Enter Your Email' id="email" style={{padding:"3px",borderRadius:"5px"}}/>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",margin:5}}>
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} type="password" placeholder='Enter Your Password' id="password" style={{padding:"3px",borderRadius:"5px"}} />
        </div>
        <button onClick={verifyUser} style={{padding:"5px",margin:"15px",backgroundColor:"blueviolet",color:"white",width:"30%",alignSelf:"center",borderRadius:"5px"}}>Login</button>
    </div>
  )
}

export default BlogLogin