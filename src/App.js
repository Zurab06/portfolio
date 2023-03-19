import "./App.css";
import { Link } from 'react'
import Vector from './files/Vector.png'

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2 className="name">Зураб</h2>
        <div className="right">
          <div className="about-me">обо мне</div>
          <div className="contacts">контакты</div>
        </div>
      </div>
      <div className="mainblock">
        <div className="left-block" >
          <div> <h1 >Привет, меня зовут Зураб Патиев</h1>
            <h1>Я фронтэнд-разработчик</h1>
          </div>
          <div><button className="download-btn">скачать</button>
            <button className="more">Github</button></div>
        </div>
        <div className="profile"><img className="photo" src="https://avatars.dzeninfra.ru/get-zen_doc/1574327/pub_5e039a5e5ba2b500b5a39289_5e039a6d1e8e3f00b0d1db2d/scale_1200" alt="profile" /></div>
      </div>
      <h1 className="info">Обо мне</h1>
      <div className="about">
        <div>Я фронтэнд разработчик, занимаюсь разра
          боткой около двух лет. в своей разработке использовал такие технологии и библиотеки как redux-toolkit, TypeScript, sass, mongoose, express, react-redux и reactJS. Знаю английский язык
          на уровне b1, свободно общаюсь с иностранцами. Пунктуален, коммуникабелен и ответственнен.</div>
      </div>
      <div className="info-block">
        <div><div className="block"><div className="ellipse"></div></div><h4 className="headers">Имя</h4></div>
        <div><div className="block"><div className="ellipse"></div></div><h4 className="headers">e-mail</h4></div>
        <div><div className="block"><div className="ellipse"></div></div><h4 className="headers">LinkedIn</h4></div>
        <div> <div className="block"><div className="ellipse"></div></div><h4 className="headers">Номер</h4></div>
      </div>
      <div className="information">
        <h4 className="my-name">Зураб Патиев</h4>
        <h4 className="my-mail"><a href="https://www.gaunt0066@gmail.com">gaunt0066@gmail.com</a></h4>
        <h4 className="linkedin"> <a href="https://www.linkedin.com/in/zurab-patiev-237307179
">my linkedIn</a>
        </h4>
        <h4 className="my-number">89286985098</h4>
      </div>
      <h1 className="what-i-do">Чем я занимаюсь</h1>
      <div className="my-work-block">
        <div className="do-block"><svg className="svg" xmlns="http://www.w3.org/2000/svg" width="57" height="48" viewBox="0 0 57 48" fill="none">
          <path d="M55.7752 22.6406L50.5706 14.2379C50.6819 14.0305 50.7655 13.7971 50.7655 13.5377C50.7655 12.7596 50.0697 12.1112 49.2347 12.0853L43.4735 2.80079C43.5292 2.6452 43.5848 2.4896 43.5848 2.33401C43.5848 1.50416 42.8612 0.855747 41.9983 0.855747C41.4974 0.855747 41.0799 1.06323 40.7737 1.40037H29.6967C29.4184 1.06333 29.0009 0.855844 28.4999 0.855844C27.999 0.855844 27.5815 1.06333 27.3032 1.40046H16.2818C15.9756 1.06333 15.5582 0.855844 15.0572 0.855844C14.1944 0.855844 13.4707 1.50416 13.4707 2.33411C13.4707 2.4897 13.5264 2.67124 13.5821 2.80088L7.76518 12.2151C7.20866 12.4484 6.81891 12.9413 6.81891 13.5378C6.81891 13.5896 6.84675 13.6415 6.84675 13.6934L1.30817 22.6147C0.556726 22.7444 0 23.3409 0 24.0671C0 24.7673 0.528775 25.3638 1.25248 25.5194L6.98588 34.752C6.93019 34.9076 6.90234 35.0373 6.90234 35.2188C6.90234 35.919 7.43112 36.5155 8.15482 36.6452L13.5264 45.3331C13.4707 45.4887 13.4151 45.6703 13.4151 45.8518C13.4151 46.6817 14.1387 47.3301 15.0016 47.3301C15.5025 47.3301 15.92 47.1226 16.1984 46.8114H27.3033C27.5815 47.1225 28.0269 47.33 28.4999 47.33C28.973 47.33 29.4184 47.1225 29.6967 46.8113H40.8295C41.1077 47.0965 41.5252 47.2781 41.9706 47.2781C42.8612 47.2781 43.557 46.6038 43.557 45.7998C43.557 45.6442 43.5293 45.5146 43.4736 45.3849L48.8452 36.6451C49.5688 36.5154 50.0977 35.9189 50.0977 35.2187C50.0977 35.0631 50.0698 34.9075 50.0141 34.7519L55.7197 25.5193C56.4433 25.3896 57 24.7931 57 24.067C56.9998 23.3668 56.4709 22.7702 55.7752 22.6406V22.6406ZM14.5283 42.9471L9.99177 35.6077H14.5283V42.9471ZM14.5283 34.8297H9.99177C9.96392 34.726 9.90823 34.6223 9.85264 34.5185L14.5283 29.9282V34.8297ZM14.5283 28.787L9.29591 33.9479C9.15678 33.8961 9.01755 33.8182 8.87842 33.7924L3.08953 24.456C3.14512 24.3263 3.14512 24.1966 3.14512 24.067C3.14512 23.9373 3.14512 23.8336 3.11727 23.7298L8.51672 15.0159C8.79509 14.99 9.07335 14.9121 9.32386 14.7565L14.5284 19.7879V28.787H14.5283ZM14.5283 18.8801L9.7691 14.2898C9.90823 14.0823 9.99177 13.823 9.99177 13.5378C9.99177 13.5118 9.96392 13.4599 9.96392 13.434L14.5283 11.9038V18.8801ZM14.5283 11.0739L9.99177 12.604L14.5283 5.29054V11.0739ZM48.4554 14.8603L48.539 14.99L44.8651 31.173L38.2411 24.6635L48.4276 14.8344L48.4554 14.8603ZM28.8896 33.6886L30.0864 34.8297H27.7207L28.8896 33.6886ZM28.8617 32.5993L20.2061 24.3263L28.4721 16.1571L37.1 24.6375L28.8617 32.5993V32.5993ZM29.4184 33.1699L37.6566 25.2081L44.6703 32.1066L44.058 34.8297H31.1718L29.4184 33.1699V33.1699ZM41.2191 3.60489C41.3304 3.65678 41.4417 3.70868 41.5809 3.73463L47.5926 13.4859V13.5378C47.5926 13.823 47.676 14.0823 47.8153 14.2898L37.6845 24.0929L29.0567 15.6124L41.2191 3.60489ZM40.2729 3.3974L28.4721 15.0419L22.5439 9.20667L39.8274 3.3974H40.2729V3.3974ZM27.4423 3.3974C27.7206 3.65669 28.0824 3.81228 28.4999 3.81228C28.9175 3.81228 29.2792 3.65669 29.5576 3.3974H37.3505L21.9317 8.5842L16.6436 3.3974H27.4423V3.3974ZM15.3634 3.94202L15.4747 3.73463C15.5686 3.71226 15.6614 3.68629 15.753 3.65678L21.0689 8.86963L15.3634 10.7887V3.94202ZM15.3634 11.6186L21.6811 9.492L27.8876 15.6124L19.6216 23.7558L15.3634 19.6842V11.6186ZM15.3634 20.5918L19.1484 24.2485L15.3634 27.9571V20.5918V20.5918ZM15.3634 29.0983L19.7329 24.7932L28.333 33.1181L26.5517 34.8297H15.3634V29.0983V29.0983ZM16.087 44.7884C15.92 44.6328 15.7252 44.5291 15.4747 44.4513L15.3634 44.2957V35.6077H25.7446L16.2261 44.7884H16.087ZM29.5854 44.7884C29.3071 44.5551 28.9175 44.3735 28.4999 44.3735C28.0824 44.3735 27.6929 44.5551 27.4144 44.7884H17.3949L26.9134 35.6077H30.8934L40.4119 44.7884H29.5854ZM42.0541 43.6473L41.6088 44.3734C41.4696 44.3994 41.3584 44.4512 41.247 44.5031L31.979 35.6077H43.8633L42.0541 43.6473V43.6473ZM43.3899 41.4948L44.7259 35.6077H47.0081L43.3899 41.4948ZM47.0081 34.8297H44.8929L45.366 32.781L47.1473 34.5445C47.0917 34.6222 47.036 34.7259 47.0081 34.8297V34.8297ZM53.8826 24.43L48.1214 33.7924C47.9822 33.8442 47.843 33.8961 47.7039 33.9738L45.5608 31.8472L49.1512 15.9755L53.9104 23.6521C53.8826 23.7817 53.8269 23.9114 53.8269 24.067C53.8269 24.1966 53.8548 24.3004 53.8826 24.43Z" fill="#27AE60" />
        </svg><div className="inside-block">Web-разработка</div></div>
        <div className="do-block"><svg className="svg" xmlns="http://www.w3.org/2000/svg" width="51" height="48" viewBox="0 0 51 48" fill="none">
          <path d="M13.6744 19.1436C13.2327 18.8428 12.7898 18.6923 12.3481 18.6923H10.3628V29.5298H12.3493C12.791 29.5298 13.2338 29.3794 13.6755 29.0785C14.1172 28.7777 14.3381 28.3264 14.3381 27.7237V20.4984C14.3369 19.8967 14.1149 19.4444 13.6744 19.1436V19.1436ZM46.0025 0.855747H4.99754C2.24263 0.855747 0.00683036 2.88796 0 5.39944V42.7864C0.00683036 45.2979 2.24263 47.3301 4.99754 47.3301H46.0025C48.7585 47.3301 50.9932 45.2979 51 42.7864V5.39944C50.9932 2.88796 48.7574 0.855747 46.0025 0.855747V0.855747ZM17.554 27.7434C17.554 29.6947 16.2323 32.6512 12.0487 32.645H6.76661V15.4806H12.1603C16.1948 15.4806 17.5517 18.433 17.5529 20.3853L17.554 27.7434ZM29.0154 18.5461H22.95V22.5317H26.6577V25.5992H22.95V29.5837H29.0165V32.6512H21.938C20.6675 32.6813 19.6111 31.7664 19.5792 30.6087V17.6301C19.5485 16.4734 20.5537 15.5128 21.823 15.4838H29.0165L29.0154 18.5461ZM40.8137 30.506C39.311 33.6959 36.6187 33.061 35.4131 30.506L31.0269 15.4848H34.7346L38.1168 27.2818L41.483 15.4848H45.1919L40.8137 30.506V30.506Z" fill="#27AE60" />
        </svg><div className="inside-block">верстка</div></div>
        <div className="do-block"><svg className="svg" xmlns="http://www.w3.org/2000/svg" width="45" height="48" viewBox="0 0 45 48" fill="none">
          <path d="M44.1461 15.3521L23.5797 1.19188C22.8777 0.745747 22.1285 0.741662 21.4201 1.19188L0.853768 15.3521C0.326425 15.7151 0 16.3635 0 17.0118V31.1719C0 31.8203 0.326425 32.4687 0.853856 32.8317L21.4202 46.9939C22.1222 47.4401 22.8714 47.4442 23.5798 46.9939L44.1461 32.8317C44.6735 32.4688 45 31.8203 45 31.1719V17.0118C44.9999 16.3635 44.6735 15.7151 44.1461 15.3521ZM24.4335 6.5861L39.5758 17.0118L32.8208 21.6801L24.4335 15.8966V6.5861ZM20.5664 6.5861V15.8966L12.1791 21.6801L5.42407 17.0118L20.5664 6.5861ZM3.86718 20.7464L8.71372 24.0919L3.86718 27.4374V20.7464ZM20.5664 41.5977L5.42407 31.172L12.1791 26.5038L20.5664 32.2872V41.5977ZM22.5 28.812L15.6695 24.0919L22.5 19.3718L29.3304 24.0919L22.5 28.812ZM24.4335 41.5977V32.2872L32.8208 26.5038L39.5758 31.172L24.4335 41.5977ZM41.1327 27.4374L36.2862 24.0919L41.1327 20.7464V27.4374Z" fill="#27AE60" />
        </svg><div className="inside-block">дизайн </div></div>
      </div>
      <h1 className="my-skills">мой основной стек:</h1>
      <div className="stek">
        <div>JS/TS</div>
        <div>HTML</div>
        <div>SASS</div>
      </div>
      <div className="svg-container"> <svg className="svg-logos" xmlns="http://www.w3.org/2000/svg" fill="none" height="2500" width="2183" viewBox="0 0 124 141.53199999999998">
        <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32" /><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25" /><g fill="#fff"><path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 
      99.5 90.263 79l-23.136 3.35z"/></g></svg>
        <svg className="svg-logos" xmlns="http://www.w3.org/2000/svg" fill="none"
          height="2500" width="2183" viewBox="0 0 124 141.53199999999998">
          <path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e34f26" /><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ef652a" />
          <path d="M99.49 41.362l1.446-15.49H22.383l4.34
       47.49h54.213L78.81 93.617l-17.362
        4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z" fill="#fff" /></svg>

        <svg className="svg-logos" xmlns="http://www.w3.org/2000/svg"
          width="2500" height="1875" viewBox="0 0 512 384"><path fill="#CF649A"
            d="M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 
  201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 
  5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5
   0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 
   6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 
   4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7
    42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 
    8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 
    6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z"/></svg>

      </div>
      <div className="footer"> Zurab Patiev, 2023</div>
    </div>
  );
}

export default App;
