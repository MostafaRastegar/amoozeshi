import React, { useEffect } from 'react';
import ProfileMenu from './profileMenu'; //import a component from another file
import Loading from '../../../snappLoading';
import './style.scss';

function PageProfile(props) {
  const loading = false;
  const auth = {
    fullname: 'mostafa',
    email: 'm.rastegar@gmail.com',
    mobileNumber: '09358537536'
  }
  useEffect(() => {
    // if (typeof props.auth.id === "undefined") {
    //   history.push("/");
    // }
  }, [])

  const userLogOutClick = () => {
    console.log('====================================');
    console.log('logout');
    console.log('====================================');
  }

  return (
    <React.Fragment>
      {!loading ?
        <div className={`page-profile`}>
          <div className={`profile-home relative profile-home__vip-not`}>
            {
            //   <div className="profile-background flex relative cover center bottomP20">
            //   <span className="profile-background__text text22">پروفایل</span>
            //   <div className="profile-background__icon"/>
            // </div>
          }

            <div className="profile-user bg-primary color-white topP20">
              <div className="profile">

                <div className={`profile__image center`}>
                  <span className="icon chilivery-user"> </span>
                </div>

                <div className="profile__character">
                  <h5 className="profile__name text14">{auth.email}</h5>
                </div>

                <div className="profile__character flex rRow wFull spaceAround">
                  <div className="rCol flex">
                    <span className="detail">2</span>
                    <span className="title color-grey-220">تعداد دوره</span>
                  </div>
                  <div className="rCol flex">
                    <span className="detail">2</span>
                    <span className="title color-grey-220">تعداد دوره</span>
                  </div>
                  <div className="rCol flex">
                    <span className="detail">2</span>
                    <span className="title color-grey-220">تعداد دوره</span>
                  </div>
                </div>
                <div className="profile__character flex rRow wFull center">
                  <button className="btn btn-success center">
                    <span className="icon-circle-pluse leftP10"/>
                    <span>ایجاد دوره آموزشی</span>
                  </button>
                </div>

              </div>

            </div>

          </div>


          <div className={`profile-menu-detail bgWhite`}>
            <div className="profile-menu__item">
              <ProfileMenu userLogOut={()=>userLogOutClick()}/>
            </div>
          </div>

        </div> :
        <div className="center">
          <Loading />
        </div>
      }
    </React.Fragment>
  );
}
export default PageProfile;
