import Helmet from 'react-helmet'

import AppBanner from "../appBanner/appBanner"
import ComicList from "../comicList/comicList"

const ComicsPage = () => {
    return (
        <>
            <Helmet>
            <meta
                name="description"
                content="List of comics" />
                <title>Comics</title>
            </Helmet>
            <AppBanner className="app__appBanner" />
            <ComicList className="app_comicList" />
        </>
    )
}

export default ComicsPage