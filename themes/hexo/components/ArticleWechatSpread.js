export default function ArticleWechatSpread () {
  return (
    <section className="dark:text-gray-300 mt-6 mx-1 ">
      <div className="notion-row">
        <div className="notion-column"
             style={{ width: 'calc(16.6667% + max(-10.6667px, -1.33333vw))' }}>
          <div className="notion-blank">&nbsp;</div>
        </div>
        <div className="notion-spacer"></div>
        <div className="notion-column"
             style={{ width: 'calc(100% + max(-64px, -8vw))' }}>
          <div className="notion-text">        欢迎加入<span
            className="notion-blue">“</span><span className="notion-blue"><b>喵星计算机技术研究院</b></span><span
            className="notion-blue">”</span>，原创技术文章第一时间推送。
          </div>
          <figure className="notion-asset-wrapper notion-asset-wrapper-image">
            <div
              style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignSelf: 'center', width: '100%', maxWidth: '100%', flexDirection: 'column', height: '100%' }}>
              <img style={{ objectFit: 'cover' }}
                   src="https://oss.expoli.tech/img/%E5%96%B5%E6%98%9F%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8A%80%E6%9C%AF%E7%A0%94%E7%A9%B6%E9%99%A2-%E7%99%BD%E8%89%B2%E7%89%88.png"
                   alt="notion image" loading="lazy" decoding="async" className="medium-zoom-image" title=""></img>
            </div>
          </figure>
        </div>
        <div className="notion-spacer"></div>
        <div className="notion-column"
             style= {{ width: 'calc(12.5% + max(-8px, -1vw))' }} >
          <div className="notion-blank">&nbsp;</div>
        </div>
        <div className="notion-spacer"></div>
      </div>
    </section>
  )
}
