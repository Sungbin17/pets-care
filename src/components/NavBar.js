
import React from 'react';
import {
    Link
  } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <nav class="menu navbar navbar-expand-lg navbar-light" id="top">
                <Link class="navbar-brand" to="/">
                    <img src={require('../images/logo.png')} width="70" height="50" alt="logo" />
                    PET
                    </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">홈 <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">소개</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">예약하기</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">플레이스</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">제휴문의</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">공지사항</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">후기</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Q&A</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>

                    </ul>

                    <form class="menu_form form-inline my-2 my-lg-0">
                        <input class="menu_form_input form-control mr-sm-2" type="search" placeholder="검색" aria-label="Search" />
                        <button class="menu_form_btn btn btn-outline-success my-2 my-sm-0" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default NavBar;