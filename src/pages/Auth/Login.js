
import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <div class="container-fluid login">
                    <table class="title-table" align="center" height="90">
                        <tr>
                            <td><label>LOGIN</label></td>
                        </tr>
                    </table>
                    <form class="indi-form" name="loginform" method="post" style={{paddingBottom: '30px'}}>
                        <table class="userid-table" align="center" height="40" width="430" border="0">
                            <tr>
                                <td><input id="userid" type="text" name="id"  placeholder="아이디" /></td>
                            </tr>
                        </table>
                        <table class="password-table" align="center" height="40" width="430" border="0">
                            <tr>
                                <td><input id="password" type="password" name="pw"  placeholder="비밀번호" /></td>
                            </tr>
                        </table>

                        <table class="btn-table" align="center" height="40">
                            <tr>
                                <td><input id="btn-login" type="button" name="login" value="로그인" onClick="" /></td>
                            </tr>
                        </table>

                       
                        <table align="center" height="50" class="link-table">
                            <tr>
                                <td><a style={{textDecoration: 'none'}} href="" /> 회원가입 | </td>
                                <td><a style={{textDecoration: 'none'}} href="" /> 비밀번호분실  </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;