import { SectionSt } from "./Register.styled";

const Register = () =>{
    return(
    <SectionSt>
        <div>
            <p>Registration</p>
            <form>
                <label>
                    
                    <input type="email" name="email"/>
                    <p>Username</p>
                </label>
                <label>
                    
                    <input type="password" name="password"/>
                    <p>Password</p>
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    </SectionSt>
    )
}

export default Register;