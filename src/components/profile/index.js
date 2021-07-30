import React from "react"
import * as S from "./styled"

function Profile(){
    return(
        <S.Wrapper>
          <S.WrapperImage src="" alt="foto do usuário"/>
          <S.WrapperInfoUser>
            <div>
                <h1>kai</h1>
                <S.WrapperUsername>
                    <h3>username: </h3>
                    <span>remerson</span>
                </S.WrapperUsername>
            </div>
            <S.WrapperStatusCounter>
                <div>
                <h4>Followers</h4>
                <span>5</span>
                </div>
                <div>
                <h4>Starreds</h4>
                <span>5</span>
                </div>
                <div>
                <h4>Followings</h4>
                <span>5</span>
                </div>
            </S.WrapperStatusCounter>

          </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile