import './loading.less';

export default Loading = (isShow, children) => {
  return (
    <div className={isShow? 'loading-wrap active' : 'loading-wrap'}>
      <div className="load-item" />
      <div className="load-item" />
    </div>
  )
}