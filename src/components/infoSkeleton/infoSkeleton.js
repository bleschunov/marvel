import './infoSkeleton.scss'

const InfoSkeleton = ({className}) => {
    return (
       <section className={`infoSkeleton ${className}`}>
           <div className="infoSkeleton__title">Please select a character to see information</div>
           <div className="infoSkeleton__header">
               <div className="infoSkeleton__circle"></div>
               <div className="infoSkeleton__rect"></div>
            </div>
            <div className="infoSkeleton__rect infoSkeleton__rect_wide"></div>
            <div className="infoSkeleton__rect infoSkeleton__rect_wide"></div>
            <div className="infoSkeleton__rect infoSkeleton__rect_wide"></div>
       </section>
    )
}

export default InfoSkeleton