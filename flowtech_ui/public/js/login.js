

let screenWidth = window.innerWidth;

window.addEventListener("resize", function () {
    screenWidth = window.innerWidth;
});


const loginPage = () => {
    const main = document.querySelector(".container.my-4");
    const login = document.getElementById('page-login')
    if (login) {
        login.style.background = '#fffdf7'
    }
    if (main) {
        main.style.backgroundColor = '#fffdf7'
    }
    const maincontainer = document.querySelector('.page_content');
    const loginFormContainer = document.querySelector('.page_content div');
    if (maincontainer) {
        maincontainer.style.alignContent = 'center';
        maincontainer.style.height = '80vh';


        if (loginFormContainer) {
            loginFormContainer.style.maxWidth = '800px';
            loginFormContainer.style.margin = 'auto';
            loginFormContainer.style.padding = '0px';
            const loginCard = loginFormContainer.querySelector('.for-login');
            if (loginCard) {
                loginCard.style.display = 'flex';
                loginCard.style.width = '100%';
                loginCard.style.borderRadius = '8px';
                loginCard.style.padding = '0px';
                loginCard.style.justifyContent = 'center';
                loginCard.style.flexDirection = screenWidth <= 770 ? 'column' : 'row';
                loginCard.style.boxShadow = screenWidth <= 770 ? '0px' : '0px 0px 5px grey';

                const pagecardHead = loginCard.querySelector('.page-card-head');

                if (pagecardHead) {
                    pagecardHead.style.width = screenWidth <= 770 ? '100%' : '50%';
                    pagecardHead.style.maxWidth = '450px';
                    pagecardHead.style.flex = '1';
                    pagecardHead.style.display = 'flex';
                    pagecardHead.style.justifyContent = 'start';
                    pagecardHead.style.flexDirection = 'column';
                    // pagecardHead.style.textAlign = 'center';
                    pagecardHead.style.color = '#fff';
                    pagecardHead.style.backgroundColor = screenWidth <= 770 ? 'transparent' : '#ffff'
                    pagecardHead.style.borderRadius = screenWidth <= 770 ? '0px' : '10px 0px 0px 10px'
                    pagecardHead.style.marginTop = screenWidth <= 770 ? '-10px' : '0px'

                    pagecardHead.style.position = 'relative';
                    pagecardHead.style.overflow = 'hidden';
                    if (screenWidth >= 770) {
                        const ballsDecor = document.createElement('div');
                        ballsDecor.style.position = 'absolute';
                        ballsDecor.style.bottom = '0';
                        ballsDecor.style.left = '0';
                        ballsDecor.style.width = '100%';
                        ballsDecor.style.height = '250px';
                        ballsDecor.style.pointerEvents = 'none';



                        const bigCircle = document.createElement('div');
                        bigCircle.style.position = 'absolute';
                        bigCircle.style.left = '-40%';
                        bigCircle.style.transform = 'translateY(-63%)';
                        bigCircle.style.width = '550px';
                        bigCircle.style.height = '550px';
                        bigCircle.style.borderRadius = '50%';

                        bigCircle.style.background = `
                            radial-gradient(circle at 38% 32%, 
                                rgba(20, 150, 210, 0.28), 
                                rgba(20, 150, 210, 0.06) 45%, 
                                rgba(0, 55, 95, 0.18) 85%
                            ),
                            linear-gradient(289deg, rgba(12,177,242,1) 0%, rgba(35,133,194,1) 90%)
                        `;

                        bigCircle.style.boxShadow = `

                            inset 0 0 25px rgba(74, 111, 153, 0.17)
                        `;



                        const smallCircle = document.createElement('div');
                        smallCircle.style.position = 'absolute';
                        smallCircle.style.bottom = '-20%';
                        smallCircle.style.left = '-15%';
                        smallCircle.style.width = '180px';
                        smallCircle.style.height = '180px';
                        smallCircle.style.zIndex = '3';
                        smallCircle.style.borderRadius = '50%';

                        smallCircle.style.background = `
                        radial-gradient(circle at 35% 35%, 
                            rgba(20, 150, 210, 0.32), 
                            rgba(20, 150, 210, 0.05) 45%, 
                            rgba(0, 55, 95, 0.20) 80%
                        ),
                        linear-gradient(269deg, rgba(12,177,242,1) 40%, rgba(35,133,194,1))
                    `;

                        smallCircle.style.boxShadow = `
                        0 6px 16px rgba(0, 80, 112, 0.45),
                        inset 0 0 14px rgba(0, 0, 0, 0.18)
                    `;




                        const smallCircle1 = document.createElement('div');
                        smallCircle1.style.position = 'absolute';
                        smallCircle1.style.bottom = '0px';
                        smallCircle1.style.left = '58%';
                        smallCircle1.style.bottom = '25%';
                        smallCircle1.style.width = '100px';
                        smallCircle1.style.zIndex = '3';
                        smallCircle1.style.height = '100px';
                        smallCircle1.style.background = '#3271C2';
                        smallCircle1.style.borderRadius = '50%';


                        smallCircle1.style.background = `
                            radial-gradient(circle at 30% 30%, 
                                rgba(255,255,255,0.55), 
                                rgba(255,255,255,0.08) 35%, 
                                rgba(0,0,0,0.15) 70%
                            ),
                            linear-gradient(269deg, rgba(12,177,242,1) 40%, rgba(35,133,194,1))
                        `;

                        smallCircle1.style.boxShadow = `
                                0 4px 10px rgba(0, 80, 112, 0.45),
                                inset 0 0 12px rgba(0, 0, 0, 0.22)
                            `;


                        ballsDecor.appendChild(bigCircle);
                        ballsDecor.appendChild(smallCircle);
                        ballsDecor.appendChild(smallCircle1);
                        pagecardHead.appendChild(ballsDecor);

                        const contentWrapper = pagecardHead.querySelectorAll('h4, p, img');
                        contentWrapper.forEach(el => {
                            el.style.position = 'relative';
                            el.style.zIndex = '2';
                        });
                    }

                    const applogo = pagecardHead.querySelector('.app-logo')
                    if (applogo) {
                        applogo.style.display = 'none'
                    }
                    const welcomeText = pagecardHead.querySelector('h4')
                    if (welcomeText) {
                        welcomeText.innerHTML = 'WELCOME'
                        welcomeText.style.fontSize = '26px'
                        welcomeText.style.letterSpacing = '3px'
                        welcomeText.style.fontWeight = '800'
                        welcomeText.style.margin = '0px auto 10px'
                        welcomeText.style.color = screenWidth <= 770 ? '#3271C2' : '#fff'
                        welcomeText.style.fontFamily = 'sans-serif'
                        welcomeText.style.textAlign = 'left'

                        const paraText = document.createElement('p');
                        paraText.innerHTML = 'Find your daily flow.';
                        paraText.style.fontSize = '13px'
                        paraText.style.margin = '0px'
                        paraText.style.color = screenWidth <= 770 ? '#2385c2' : '#fff';
                        paraText.style.fontWeight = '400';
                        paraText.style.fontFamily = 'sans-serif'
                        paraText.style.letterSpacing = '1px'
                        paraText.style.textAlign = 'center'



                        welcomeText.append(paraText);

                        const manImage = document.createElement('img');
                        manImage.src = '/assets/flowtech_ui/images/man.png';
                        manImage.style.height = screenWidth <= 770 ? '100px' : '165px';
                        // manImage.style.marginBottom = '15px';
                        manImage.style.filter = 'drop-shadow(0px 0px 4px grey)';
                        manImage.style.display = 'block';
                        manImage.style.margin = '0px auto 10px';
                        manImage.style.marginLeft = screenWidth >= 770 ? '80px' : 'none';
                        manImage.style.flexShrink = '0';
                        manImage.style.minHeight = '165px';
                        pagecardHead.append(manImage)


                    }


                }
                const formContent = loginCard.querySelector('.login-content.page-card');
                const loginBox = formContent.querySelector('.form-signin.form-login')
                if (formContent) {
                    formContent.style.flex = '1';
                    formContent.style.width = screenWidth <= 770 ? '100%' : '50%';
                    formContent.style.MaxWidth = '500px';
                    formContent.style.display = 'flex';
                    formContent.style.justifyContent = 'center';
                    formContent.style.flexDirection = 'column';
                    formContent.style.textAlign = 'center';
                    formContent.style.backgroundColor = '#fff';
                    formContent.style.border = 'none';
                    formContent.style.borderRadius = screenWidth <= 770 ? '5px' : '0px 10px 10px 0px';
                    formContent.style.boxShadow = screenWidth <= 770 ? '0px 0px 4px grey' : 'none';
                    formContent.style.marginTop = screenWidth <= 770 ? '-10px' : '0px';
                    formContent.style.position = 'relative';
                    formContent.style.overflow = 'hidden';

                    const hippologo = document.createElement('img');
                    hippologo.src = '/assets/flowtech_ui/images/transparent_samarpan.png';
                    hippologo.style.width = screenWidth <= 770 ? '130px' : '170px';
                    hippologo.style.display = 'block';
                    hippologo.style.margin = 'auto';
                    if (loginBox) {
                        formContent.insertBefore(hippologo, loginBox);
                        loginBox.style.marginTop = '30px'

                        loginBox.style.width = screenWidth <= 770 ? '100%' : '300px'
                        const pagecardbody = loginBox.querySelector('.page-card-body')
                        const pagecardbodysecondary = pagecardbody.querySelector('.page-card-body');
                        const loginbutton = pagecardbody.querySelector('.page-card-actions button');
                        const poweredby = pagecardbody.querySelector('.social-logins.text-center');
                        if (poweredby) {
                            poweredby.innerHTML = '';
                            poweredby.innerHTML = `
                                              <footer>
                                                       Powered by 
                                                      <a href="https://hippoclouds.com/" target="_blank">HippoCloud</a>
                                                 </footer>
                                                `;
                            poweredby.style.color = '#666'
                            poweredby.style.fontSize = '14px';
                            poweredby.style.fontWeight = '700';
                            poweredby.style.paddingTop = '10px';
                            poweredby.style.opacity = '0.5';
                            const hippotext = poweredby.querySelector('a')
                            {
                                if (hippotext) {
                                    hippotext.style.color = '#3271C2';
                                    hippotext.style.transition = '200ms';

                                    poweredby.addEventListener('mouseover', () => {

                                        poweredby.style.opacity = '1';
                                    })
                                    poweredby.addEventListener('mouseout', () => {

                                        poweredby.style.opacity = '0.5';
                                    })
                                }
                            }
                        }
                        if (pagecardbody) {
                            pagecardbody.style.gap = '20px';
                            // pagecardbodysecondary.style.display = 'none'
                            if (pagecardbodysecondary) {
                                const emailfield = pagecardbodysecondary.querySelector('.form-group .email-field');
                                const passwordfield = pagecardbodysecondary.querySelector('.form-group .password-field');
                                const forgot = pagecardbodysecondary.querySelector('.forgot-password-message a');

                                if (emailfield) {
                                    const emailinputfiled = emailfield.querySelector('input');
                                    const emailinputfiledsvg = emailfield.querySelector('svg');
                                    if (emailfield) {
                                        emailinputfiled.style.backgroundColor = '#ffff'
                                        // emailinputfiled.style.boxShadow = '0px 0px 5px grey'
                                        emailfield.style.border = 'none'
                                        emailfield.style.height = '30px'
                                        emailfield.style.borderRadius = '5px'
                                        emailfield.style.boxShadow = '0px 0px 5px grey';
                                        emailfield.style.marginBottom = '20px';
                                        if (emailinputfiledsvg) {
                                            emailinputfiledsvg.style.marginTop = '2px';
                                            emailinputfiled.placeholder = 'Add your email here'

                                        }
                                    }
                                }
                                if (passwordfield) {
                                    const passowordinputfiled = passwordfield.querySelector('input');
                                    const passowordinputfiledsvg = passwordfield.querySelector('svg');
                                    if (passwordfield) {
                                        passowordinputfiled.style.backgroundColor = '#ffff'
                                        passwordfield.style.border = 'none'
                                        passwordfield.style.height = '30px'
                                        passwordfield.style.borderRadius = '5px'
                                        passwordfield.style.boxShadow = '0px 0px 5px grey';
                                        if (passowordinputfiledsvg) {
                                            passowordinputfiled.placeholder = 'Add your password here';
                                            passowordinputfiledsvg.style.marginTop = '2px';

                                        }
                                    }
                                }
                                if (forgot) {
                                    forgot.style.transition = '200ms';
                                    forgot.style.color = '#2385c2';

                                    forgot.addEventListener('mouseover', () => {
                                        forgot.style.color = '#3271C2';
                                    })
                                    forgot.addEventListener('mouseout', () => {
                                        forgot.style.color = '#2385c2';
                                    })
                                }


                            }
                        }
                        if (loginbutton) {
                            loginbutton.style.backgroundColor = '#3271C2';
                            loginbutton.style.borderRadius = '5px';
                            loginbutton.style.boxShadow = '0px 0px 5px grey';

                            loginbutton.addEventListener('mouseover', () => {
                                loginbutton.style.backgroundColor = '#2385c2';
                            });
                            loginbutton.addEventListener('mouseout', () => {
                                loginbutton.style.backgroundColor = '#3271C2';
                            })
                        }
                        const smallCircle1 = document.createElement('div');
                        smallCircle1.style.position = 'absolute';
                        smallCircle1.style.width = '140px';
                        smallCircle1.style.height = '140px';
                        smallCircle1.style.borderRadius = '50%';
                        smallCircle1.style.zIndex = '3';

                        smallCircle1.style.bottom = screenWidth >= 770 ? '-15%' : '-18%';
                        smallCircle1.style.right = screenWidth >= 770 ? '-15%' : '-18%';

                        smallCircle1.style.background = `
                                    radial-gradient(circle at 30% 30%, 
                                        rgba(255,255,255,0.55), 
                                        rgba(255,255,255,0.08) 35%, 
                                        rgba(0,0,0,0.15) 70%
                                    ),
                                    linear-gradient(269deg, rgba(12,177,242,1) 40%, rgba(35,133,194,1))
                                `;

                        smallCircle1.style.boxShadow = `
                                    0 4px 10px rgba(0, 80, 112, 0.45),
                                    inset 0 0 12px rgba(0, 0, 0, 0.22)
                                `;

                        loginBox.style.position = 'relative';

                        formContent.appendChild(smallCircle1);


                    }



                }
            }
        }
    }
}


const forgotPage = () => {
    const maincontainer = document.querySelector('.page_content');
    const loginFormContainer = document.querySelector('.page_content div');
    if (maincontainer) {
        maincontainer.style.alignContent = 'center';
        maincontainer.style.height = '80vh';

        const ForgotCard = loginFormContainer.querySelector('.for-forgot');
        if (ForgotCard) {
            ForgotCard.style.display = 'flex';
            ForgotCard.style.width = '100%';
            ForgotCard.style.borderRadius = '8px';
            ForgotCard.style.padding = '0px';
            ForgotCard.style.justifyContent = 'center';
            ForgotCard.style.backgroundColor = '#fff';
            ForgotCard.style.flexDirection = screenWidth <= 770 ? 'column' : 'row';
            ForgotCard.style.boxShadow = screenWidth <= 770 ? 'none' : '0px 0px 5px grey';

            const pagecardHead = ForgotCard.querySelector('.page-card-head');
            if (pagecardHead) {
                pagecardHead.style.width = screenWidth <= 770 ? '100%' : '50%';
                pagecardHead.style.maxWidth = '450px';
                pagecardHead.style.flex = '1';
                pagecardHead.style.display = 'flex';
                pagecardHead.style.justifyContent = 'start';
                pagecardHead.style.flexDirection = 'column';
                pagecardHead.style.textAlign = 'center';
                pagecardHead.style.color = '#fff';
                pagecardHead.style.backgroundColor = screenWidth <= 770 ? 'transparent' : '#ffff'
                pagecardHead.style.borderRadius = screenWidth <= 770 ? '0px' : '10px 0px 0px 10px'
                pagecardHead.style.marginTop = screenWidth <= 770 ? '-10px' : '0px'

                pagecardHead.style.position = 'relative';
                pagecardHead.style.overflow = 'hidden';
                if (screenWidth >= 770) {
                    const ballsDecor = document.createElement('div');
                    ballsDecor.style.position = 'absolute';
                    ballsDecor.style.bottom = '0';
                    ballsDecor.style.left = '0';
                    ballsDecor.style.width = '100%';
                    ballsDecor.style.height = '250px';
                    ballsDecor.style.pointerEvents = 'none';



                    const bigCircle = document.createElement('div');
                    bigCircle.style.position = 'absolute';
                    bigCircle.style.left = '-40%';
                    bigCircle.style.transform = 'translateY(-63%)';
                    bigCircle.style.width = '550px';
                    bigCircle.style.height = '550px';
                    bigCircle.style.borderRadius = '50%';

                    bigCircle.style.background = `
                            radial-gradient(circle at 38% 32%, 
                                rgba(20, 150, 210, 0.28), 
                                rgba(20, 150, 210, 0.06) 45%, 
                                rgba(0, 55, 95, 0.18) 85%
                            ),
                            linear-gradient(289deg, rgba(12,177,242,1) 0%, rgba(35,133,194,1) 90%)
                        `;

                    bigCircle.style.boxShadow = `

                            inset 0 0 25px rgba(74, 111, 153, 0.17)
                        `;



                    const smallCircle = document.createElement('div');
                    smallCircle.style.position = 'absolute';
                    smallCircle.style.bottom = '-20%';
                    smallCircle.style.left = '-15%';
                    smallCircle.style.width = '180px';
                    smallCircle.style.height = '180px';
                    smallCircle.style.zIndex = '3';
                    smallCircle.style.borderRadius = '50%';

                    smallCircle.style.background = `
                        radial-gradient(circle at 35% 35%, 
                            rgba(20, 150, 210, 0.32), 
                            rgba(20, 150, 210, 0.05) 45%, 
                            rgba(0, 55, 95, 0.20) 80%
                        ),
                        linear-gradient(269deg, rgba(12,177,242,1) 40%, rgba(35,133,194,1))
                    `;

                    smallCircle.style.boxShadow = `
                        0 6px 16px rgba(0, 80, 112, 0.45),
                        inset 0 0 14px rgba(0, 0, 0, 0.18)
                    `;




                    const smallCircle1 = document.createElement('div');
                    smallCircle1.style.position = 'absolute';
                    smallCircle1.style.bottom = '0px';
                    smallCircle1.style.left = '58%';
                    smallCircle1.style.bottom = '25%';
                    smallCircle1.style.width = '90px';
                    smallCircle1.style.zIndex = '3';
                    smallCircle1.style.height = '90px';
                    smallCircle1.style.background = '#3271C2';
                    smallCircle1.style.borderRadius = '50%';


                    smallCircle1.style.background = `
                            radial-gradient(circle at 30% 30%, 
                                rgba(255,255,255,0.55), 
                                rgba(255,255,255,0.08) 35%, 
                                rgba(0,0,0,0.15) 70%
                            ),
                            linear-gradient(269deg, rgba(12,177,242,1) 40%, rgba(35,133,194,1))
                        `;

                    smallCircle1.style.boxShadow = `
                                0 4px 10px rgba(0, 80, 112, 0.45),
                                inset 0 0 12px rgba(0, 0, 0, 0.22)
                            `;


                    ballsDecor.appendChild(bigCircle);
                    ballsDecor.appendChild(smallCircle);
                    ballsDecor.appendChild(smallCircle1);
                    pagecardHead.appendChild(ballsDecor);

                    const contentWrapper = pagecardHead.querySelectorAll('h4, p, img');
                    contentWrapper.forEach(el => {
                        el.style.position = 'relative';
                        el.style.zIndex = '2';
                    });
                }

                const applogo = pagecardHead.querySelector('.app-logo')
                if (applogo) {
                    applogo.style.display = 'none'
                }
                const welcomeText = pagecardHead.querySelector('h4')
                if (welcomeText) {
                    welcomeText.innerHTML = 'Forgot Password'
                    welcomeText.style.fontSize = '26px'
                    welcomeText.style.letterSpacing = '3px'
                    welcomeText.style.fontWeight = '800'
                    welcomeText.style.margin = '0px auto 10px'
                    welcomeText.style.color = screenWidth <= 770 ? '#3271C2' : '#fff'
                    welcomeText.style.fontFamily = 'sans-serif'
                    welcomeText.style.textAlign = 'left'

                    const paraText = document.createElement('p');
                    paraText.innerHTML = 'Regain Your flow.';
                    paraText.style.fontSize = '13px'
                    paraText.style.margin = '0px'
                    paraText.style.color = screenWidth <= 770 ? '#2385c2' : '#fff';
                    paraText.style.fontWeight = '400';
                    paraText.style.fontFamily = 'sans-serif'
                    paraText.style.letterSpacing = '1px'
                    paraText.style.textAlign = 'center'



                    welcomeText.append(paraText);

                    const manImage = document.createElement('img');
                    manImage.src = '/assets/flowtech_ui/images/password.png';
                    manImage.style.height = screenWidth <= 770 ? '100px' : '150px';
                    // manImage.style.marginBottom = '15px';
                    // manImage.style.marginTop = '30px';
                    manImage.style.filter = 'drop-shadow(0px 0px 4px grey)';
                    manImage.style.display = 'block';
                    manImage.style.margin = '0px auto 10px';
                    manImage.style.marginLeft = screenWidth >= 770 ? '90px' : 'none';
                    manImage.style.marginTop = screenWidth >= 770 ? '-15px' : 'none';
                    manImage.style.flexShrink = '0';
                    manImage.style.minHeight = '150px';
                    pagecardHead.append(manImage)


                }


            }
            const formContent = ForgotCard.querySelector('.login-content.page-card');
            const forgotBox = formContent.querySelector('.form-signin.form-forgot')
            if (formContent) {
                formContent.style.flex = '1';
                formContent.style.width = screenWidth <= 770 ? '100%' : '50%';
                formContent.style.maxWidth = '400px';
                formContent.style.display = 'flex';
                formContent.style.justifyContent = 'center';
                formContent.style.flexDirection = 'column';
                formContent.style.textAlign = 'center';
                formContent.style.backgroundColor = '#fff';
                formContent.style.border = 'none';
                formContent.style.position = 'relative';
                formContent.style.overflow = 'hidden';
                formContent.style.borderRadius = screenWidth <= 770 ? '8px' : '0px 10px 10px 0px';
                formContent.style.boxShadow = screenWidth <= 770 ? '0px 0px 5px  grey' : 'none';

                const hippologo = document.createElement('img');
                hippologo.src = '/assets/flowtech_ui/images/transparent_samarpan.png';
                hippologo.style.width = screenWidth <= 770 ? '140px' : '170px';
                hippologo.style.display = 'block';
                hippologo.style.margin = '0px auto 0px';
                if (forgotBox) {
                    formContent.insertBefore(hippologo, forgotBox);
                    forgotBox.style.marginTop = '30px'
                    forgotBox.style.overflow = 'hidden'
                    forgotBox.style.width = screenWidth <= 770 ? '90%' : '300px'
                    const pagecardbody = forgotBox.querySelector('.page-card-body')
                    const forgotButtonDiv = forgotBox.querySelector('.page-card-actions');
                    const forgotButton = forgotBox.querySelector('.page-card-actions button');
                    const loginText = forgotBox.querySelector('.text-center.sign-up-message a');
                    // const poweredby = pagecardbody.querySelector('.social-logins.text-center');
                    if (loginText) {
                        loginText.style.color = '#2385c2';
                        loginText.style.transition = '200ms';
                        loginText.style.display = '200ms';

                        loginText.addEventListener('mouseover', () => {
                            loginText.style.color = '#3271C2';
                        });
                        loginText.addEventListener('mouseout', () => {
                            loginText.style.color = '#2385c2';
                        })
                        const poweredby = document.createElement('footer')

                        poweredby.innerHTML = '';
                        poweredby.innerHTML = `
                                           
                                                       Powered by 
                                                      <a href="https://hippoclouds.com/" target="_blank">HippoCloud</a>
                                                `;
                        poweredby.style.color = '#666'
                        poweredby.style.fontSize = '14px';
                        poweredby.style.fontWeight = '700';
                        poweredby.style.paddingTop = '10px';
                        poweredby.style.opacity = '0.5';
                        const hippotext = poweredby.querySelector('a')
                        {
                            if (hippotext) {
                                hippotext.style.color = '#3271C2';
                                hippotext.style.transition = '200ms';

                                poweredby.addEventListener('mouseover', () => {

                                    poweredby.style.opacity = '1';
                                })
                                poweredby.addEventListener('mouseout', () => {

                                    poweredby.style.opacity = '0.5';
                                })
                            }
                        }
                        forgotButtonDiv.appendChild(poweredby)
                    }
                    // forgotButton.append(poweredby)

                    if (pagecardbody) {

                        const emailfield = pagecardbody.querySelector('.email-field');

                        if (emailfield) {
                            emailfield.style.marginTop = '-10px'
                            const emailinputfiled = emailfield.querySelector('input');
                            const emailinputfiledsvg = emailfield.querySelector('svg');
                            if (emailfield) {
                                emailinputfiled.style.backgroundColor = 'transparent'
                                emailinputfiled.style.marginTop = '15px'
                                emailfield.style.border = 'none'
                                emailfield.style.height = '30px'
                                emailinputfiled.style.width = '99%'
                                emailfield.style.alignItems = 'center'
                                emailinputfiled.style.borderRadius = '5px'
                                emailinputfiled.style.boxShadow = '0px 0px 5px grey';
                                emailinputfiled.style.marginLeft = '2px';

                                emailfield.style.marginBottom = '20px';
                                // emailinputfiled.style.border = '2px solid red';
                                if (emailinputfiledsvg) {
                                    emailinputfiledsvg.style.marginTop = '-1px';
                                    emailinputfiled.placeholder = 'Add your email here'

                                }
                            }
                        }
                        const smallCircle1 = document.createElement('div');
                        smallCircle1.style.position = 'absolute';
                        smallCircle1.style.bottom = '0px';
                        smallCircle1.style.left = '80%';
                        smallCircle1.style.bottom = '-15%';
                        smallCircle1.style.width = '140px';
                        smallCircle1.style.zIndex = '3';
                        smallCircle1.style.height = '140px';
                        smallCircle1.style.background = '#3271C2';
                        smallCircle1.style.borderRadius = '50%';


                        smallCircle1.style.background = `
                            radial-gradient(circle at 30% 30%, 
                                rgba(255,255,255,0.55), 
                                rgba(255,255,255,0.08) 35%, 
                                rgba(0,0,0,0.15) 70%
                            ),
                            linear-gradient(269deg, rgba(12,177,242,1) 40%, rgba(35,133,194,1))
                        `;

                        smallCircle1.style.boxShadow = `
                                0 4px 10px rgba(0, 80, 112, 0.45),
                                inset 0 0 12px rgba(0, 0, 0, 0.22)
                            `;


                        formContent.appendChild(smallCircle1)




                    }
                    if (forgotButton) {
                        forgotButton.style.backgroundColor = '#3271C2';
                        forgotButton.style.borderRadius = '5px';
                        forgotButton.style.boxShadow = '0px 0px 5px grey';

                        forgotButton.addEventListener('mouseover', () => {
                            forgotButton.style.backgroundColor = '#2385c2';
                        });
                        forgotButton.addEventListener('mouseout', () => {
                            forgotButton.style.backgroundColor = '#3271C2';
                        })
                    }

                }



            }
        }
    }
}

loginPage();
forgotPage();