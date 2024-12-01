'use client';
import './login.css';
import { useRouter } from 'next/navigation';
import React, {useState} from 'react';
import { PostLogin } from '@/api/postLogin';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setEmail(e.target.value);
        console.log('email:',e.target.value);
    }

    const handlePWChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setPassword(e.target.value);
        console.log('pw:',e.target.value);
    }

    const handleLogin = async (e:React.MouseEvent<HTMLButtonElement>):Promise<void> =>{
        e.preventDefault();
        if(email && password){
            console.log(`email: ${email}, password: ${password}`);
        }
        try{
            const response = await PostLogin(email, password);
            console.log(`로그인 결과: ${response.data}`);
            const token = response.headers['Authorization'];
            if (token) {
                console.log('Authorization 토큰:', token);

                // 로컬 스토리지에 토큰 저장
                localStorage.setItem('authToken', token);

                // 로그인 성공 후 메인 페이지로 이동
                router.push('/main');
            } 
            else {
                console.warn('Authorization 토큰이 응답에 없습니다.');
            }
        }catch(error){
            console.error("로그인 실패", error);
            alert('이메일 혹은 비밀번호가 틀립니다. 다시 시도해주세요.')
        }
    }
    return (
        <div className="Login">
            <div id="logo"></div>
            <div id="inputBox">
                <input id="email" placeholder='이메일' onChange={handleEmailChange}></input>
                <input id="password" placeholder='비밀번호' onChange={handlePWChange}></input>
                <div id='remainCont'>
                    <input type="checkbox" id="remain"></input>
                    <label id="remainText">로그인 유지</label>
                </div>
          
                
            </div>
            <div id="else">
                <button id="findId" >아이디 찾기 </button>
                <div id="divider"> | </div>
                <button id="findPW"> 비밀번호 찾기</button>
                <div id="divider"> | </div>
                <button id="signup" onClick={()=> router.push('/signup')}>회원가입</button>
            </div>
            <div id="buttonCont">
                <button id='loginBtn' onClick={handleLogin}>로그인</button>
            </div>
        </div>
    );
}
