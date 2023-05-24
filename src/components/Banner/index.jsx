import "./index.scss";

export function Banner({ banner, children }) {
  return (
    <div className='banner'>
      <img src={banner} alt={children[0].props.children} />
      <div className='banner-overlay' />
      <div className='banner-infos'>{children}</div>
    </div>
  );
}
