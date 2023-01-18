import Classes from './attribute.module.css'

const Caption = () => {
  return (
    <section className={ `section flex ${Classes.section} ${Classes.caption}` }>
      <div className="section--container center flex">
        <h2 className="heading--jumbo center">Experience haven in delight</h2>
      </div>
    </section>
  );
}

export default Caption;