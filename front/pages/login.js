import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const Overlay = styled.div`
    background-color:#FBF7F5;
`;
const Left = styled.div`
    width:548px;
    height: 1vh;
    float:left;
    border-right: 1px solid #D4997F;
    & .center{
        width: 250px;
        margin: 0 auto;
    }
`;
const Right = styled.div`
    float:right;
    clear:both;
`;

const MainLogo = styled.span`
    @import url('https://fonts.googleapis.com/css?family=Tomorrow&display=swap');
    color: #260D02;
    font-family: 'Tomorrow', sans-serif;
    & .logo{
        font-size: 60px;
        display:block;
        font-family: 'Tomorrow', sans-serif;
    }
    & .underText{
        font-size: 18px;
        font-weight: block;
        display: block;
        margin-bottom: 30px;
    }
    
`
const Form = styled.form`
    *{
        color: #260D02;
    }
    label{
        font-size: 14px;
        display: inline-block;
        margin: 10px 0;
        font-weight: bold;
    }
    input{
        width:250px;
        height:48px;
        font-size: 14px;
        padding: 14px;
        box-sizing: border-box;
        border: 2px solid #260D02;
        border-radius: 5px;
        transition: all .2s ease;
    }
    input:focus{
        border: 2px solid #8E604C;
        outline: none;
    }
    button{
        background: #260D02;
        border-radius: 5px;
        width:250px;
        height:48px;
        font-size: 14px;
        padding: 14px;
        color: #FBF7F5;
        margin-top: 30px;
        transition: all .2s ease;
    }
    button:hover{
        background: #8E604C;
    }
`;

const UnderBtn = styled.div`
    font-size: 14px;
    margin-top: 30px;
    & .joinBtn{
        float: left;
    }
    & .findBtn{
        float: right;
    }
`;

function Join() {
    return (
        <Overlay>
            <Left>
                <div className="center">
                <MainLogo>
                    <span className="logo">
                    Kitten<br/>
                    in the<br/>
                    box
                    </span>
                    <span className="underText">
                    내 고양이를<br/>돌보러 갈까옹?
                    </span>
                </MainLogo>
                <Form action="post">
                    <label htmlFor="email">이메일</label><br/>
                    <input type="text" name="email" id="email"/><br/>
                    <label htmlFor="password">비밀번호</label><br/>
                    <input type="password" name="password" id="password"/><br/>
                    <button type="submit">로그인</button>
                </Form>
                <UnderBtn>
                    <span class="joinBtn"><Link href="/join"><a>회원가입</a></Link></span>
                    <span class="findBtn"><Link href="/find"><a>이메일/비밀번호 찾기</a></Link></span>
                </UnderBtn>
                </div>
            </Left>
            <Right>right</Right>
        </Overlay>
    )
}

export default Join;
