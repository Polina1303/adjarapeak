// import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { useInView } from "react-intersection-observer";
// import lycian from "../image/lycian.webp";
// import videoFile from "./mov1.mp4";
// import styles from "./rock-climbing.module.css";

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// export const RockClimbing = () => {
//   const [mounted, setMounted] = useState(false);
//   const { ref } = useInView({
//     threshold: 0,
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <>
//       <div className="climbing-container">
//         <div className="climbing-content">
//           <ReactPlayer
//             url={videoFile}
//             playing
//             controls={false}
//             muted
//             loop
//             playsinline
//             config={{
//               file: {
//                 attributes: {
//                   preload: "metadata",
//                 },
//               },
//             }}
//             className="climbing-video"
//           />

//           <div className="climbing-details">
//             <h2 className="routes-title-text">Cкалолазаниe</h2>
//             <p className="climbing-text">
//               Приглашаем на тренировки по скалолазанию на естественном рельефе в
//               живописном месте Гонио-Квариати! Подходит как новичкам, так и
//               опытным скалолазам.
//             </p>
//             <p className="climbing-text">
//               Тренировки проходят 4 раза в неделю: в субботу и воскресенье
//               (10:00 и 15:00). Всё необходимое снаряжение предоставим, включая
//               скальные туфли. Стоимость — 49 лари.
//             </p>
//             <Link href="/rock-climbing" className="climbing-button">
//               УЗНАТЬ БОЛЬШЕ
//             </Link>
//             <a
//               href="https://t.me/shpaksn"
//               target="_blank"
//               rel="noreferrer"
//               className="climbing-link"
//             >
//               Записаться на тренировку
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* <div  style={{ display: 'flex'}}>
//     <ReactPlayer
//   url={videoFile}
//   playing={true}
//   controls={false}
//   muted={true}
//   loop={true}
//       width="460px"
//         height="355px"
//         style={{display:'flex',marginLeft:'-130px'}}
//         // style={{top:'-50px',backgroundColor:'red'}}
//       />

// <div style={{
//     display: 'flex',
//     flexDirection: 'column',
//  marginLeft:'30px',
//     color: '#444',
//     lineHeight: '1.5',
//     textAlign: 'center',
//     maxWidth: '700px',
// }}>
//   <p style={{
//       fontSize: '18px',
//       fontWeight: '500',
//       marginBottom: '16px',
//   }}>
//     Приглашаем на тренировки по скалолазанию на естественном рельефе в живописном месте Гонио-Квариати! Подходит как новичкам, так и опытным скалолазам.
//   </p>
//   <p style={{
//       fontSize: '16px',
//       marginBottom: '20px',
//   }}>
//     Тренировки проходят 4 раза в неделю: в субботу и воскресенье (11:00 и 15:00). Всё необходимое снаряжение предоставим, включая скальные туфли. Стоимость — 49 лари.
//   </p>
//   <a
//     href="/rockClimbing"
//     style={{
//         display: 'inline-block',
//         backgroundColor: '#c35b28',
//         color: '#FFF',
//         textDecoration: 'none',
//         padding: '10px 20px',
//         borderRadius: '6px',
//         fontSize: '16px',
//         fontWeight: '500',
//         marginBottom: '12px',
//         transition: 'background-color 0.3s ease',
//     }}
//     onMouseOver={(e) => e.target.style.backgroundColor = '#c35b28'}
//     onMouseOut={(e) => e.target.style.backgroundColor = '#d76f3b'}
//   >
//     Узнать больше
//   </a>
//   <a
//     href="https://t.me/shpaksn"
//     target="_blank"
//     rel="noreferrer"
//     style={{
//         fontSize: '16px',
//         color: '#c35b28',
//         textDecoration: 'none',
//         fontWeight: '500',
//         transition: 'color 0.3s ease',
//     }}
//     onMouseOver={(e) => e.target.style.color = '#c35b28'}
//     onMouseOut={(e) => e.target.style.color = '#d76f3b'}
//   >
//     Записаться на тренировку
//   </a>
// </div>
//           </div> */}
//     </>
//   );
// };
