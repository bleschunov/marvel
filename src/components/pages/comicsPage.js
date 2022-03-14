import AppBanner from "../appBanner/appBanner"
import ComicList from "../comicList/comicList"

const ComicsPage = () => {
    return (
        <>
            <AppBanner className="app__appBanner" />
            <ComicList className="app_comicList" />
        </>
    )
}

export default ComicsPage