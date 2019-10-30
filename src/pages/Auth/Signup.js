import React from "react";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  state = {
    userType: null,
    profileArray: [
      {
        label: "아이디",
        type: "text",
        id: "username"
      },
      {
        label: "비밀번호",
        type: "password",
        id: "password"
      },
      {
        label: "이름",
        type: "text",
        id: "name"
      },
      {
        label: "핸드폰번호",
        type: "text",
        id: "phone"
      },
      {
        label: "집주소",
        type: "address",
        id: "address"
      },
      {
        label: "이메일",
        type: "email",
        id: "email"
      },
      {
        label: "반려동물 이름",
        type: "text",
        id: "petName"
      },
      {
        label: "반려동물 종",
        type: "text",
        id: "petType"
      },
      {
        label: "반려동물 성별",
        type: "text",
        id: "petGender"
      },
      {
        label: "반려동물 나이 (개월)",
        type: "number",
        id: "petAge"
      },
      {
        label: "반려동물 병력",
        type: "text",
        id: "petDisease"
      }
    ],
    CorporateProfileArray: [
      {
        label: "아이디",
        type: "text",
        id: "username"
      },
      {
        label: "비밀번호",
        type: "password",
        id: "password"
      },
      {
        label: "이름",
        type: "text",
        id: "name"
      },
      {
        label: "사업자 등록번호",
        type: "text",
        id: "corporate registered number"
      },
      {
        label: "업체번호",
        type: "text",
        id: "corporate number"
      },
      {
        label: "업체주소",
        type: "text",
        id: "corporate address"
      },
      {
        label: "사업자 번호",
        type: "text",
        id: "corporate number2"
      },
      {
        label: "이메일",
        type: "email",
        id: "corporate email"
      },
      {
        label: "업종",
        type: "text",
        id: "corporate type"
      },
      {
        label: "간단한 소개",
        type: "text",
        id: "corporate intro"
      },

    ]
  };

  years(n) {
    let i;
    let elements = [];
    for (i = 1940; i < n; i++) {
      elements.push(<option value={i}>{i}</option>);
    }
    elements.reverse();
    return elements;
  }

  month() {
    let i;
    let n = 13;
    let elements = [];
    for (i = 1; i < n; i++) {
      elements.push(<option value={i}>{i}</option>);
    }
    return elements;
  }

  days() {
    let i;
    let n = 32;
    let elements = [];
    for (i = 1; i < n; i++) {
      elements.push(<option value={i}>{i}</option>);
    }
    return elements;
  }

  render() {
    this.selectUserType = () => {
      return (
        <div className="container">
          <div className="row m-5" style={{ justifyContent: "space-between" }}>
            <div class="card" style={{ width: "18rem" }}>
              <img
                style={{ padding: 20 }}
                src={require("../../images/profile.png")}
                class="card-img-top"
                alt="personal user"
              />
              <div class="card-body">
                <h5 class="card-title">개인 회원</h5>
                <p class="card-text">개인 회원으로 가입합니다.</p>
                <button
                  onClick={() => this.setState({ userType: "개인" })}
                  class="btn btn-primary"
                >
                  가입하기
                </button>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                style={{ padding: 10 }}
                src={require("../../images/Corporate-icon.png")}
                class="card-img-top"
                alt="personal user"
              />
              <div class="card-body">
                <h5 class="card-title">기업 회원</h5>
                <p class="card-text">기업 회원으로 가입합니다.</p>
                <button
                  onClick={() => this.setState({ userType: "기업" })}
                  class="btn btn-primary"
                >
                  가입하기
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    this.birthDateInput = () => {
      return (
        <div className="row mt-5">
          <label className="col-sm-4" for="name">
            생년월일
          </label>

          <select className="form-control" style={{ maxWidth: "13%" }}>
            {this.years(2020)}
          </select>

          <select className="form-control ml-3" style={{ maxWidth: "13%" }}>
            {this.month()}
          </select>

          <select className="form-control ml-3" style={{ maxWidth: "13%" }}>
            {this.days()}
          </select>
        </div>
      );
    };

    return (
      <div>
        <div class="container-fluid login">
          <table class="title-table" align="center" height="90">
            <tr>
              <td>
                <label>{this.state.userType} 회원가입</label>
              </td>
            </tr>
          </table>

          {this.state.userType === null ? (
            this.selectUserType()
          ) : this.state.userType === "개인" ? (
            <div class="container mb-5">
              {this.birthDateInput()}
              {this.state.profileArray.map(item => (
                <div className="row mt-5">
                  <label className="col-sm-4" for={item.label}>
                    {item.label}
                  </label>
                  <input
                    className="col-sm-8"
                    style={{ maxWidth: "50%" }}
                    type={item.type}
                    class="form-control"
                    id={item.id}
                    placeholder={item.label}
                  />
                </div>
              ))}
              <button className="btn btn-primary mt-5">가입하기</button>
            </div>
          ) : 
          <div class="container mb-5">
              {this.state.CorporateProfileArray.map(item => (
                <div className="row mt-5">
                  <label className="col-sm-4" for={item.label}>
                    {item.label}
                  </label>
                  <input
                    className="col-sm-8"
                    style={{ maxWidth: "50%" }}
                    type={item.type}
                    class="form-control"
                    id={item.id}
                    placeholder={item.label}
                  />
                </div>
              ))}
              <button className="btn btn-primary mt-5">가입하기</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Signup;
