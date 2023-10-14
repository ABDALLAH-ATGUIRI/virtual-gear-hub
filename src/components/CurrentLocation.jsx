import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid'
import { Breadcrumbs } from '@material-tailwind/react'
import { Link, useLocation } from 'react-router-dom'

const CurrentLocation = () => {
    const paths = useLocation().pathname.split('/').filter(path => path);
    return (
        <Breadcrumbs fullWidth separator={<ChevronRightIcon className="h-4 w-4 text-gray-500" />}>
            {
                paths.map((item, i) => {
                    if (i === 0) {
                        return (
                            <Link to={`/${item}`} key={i} className="opacity-60 font-semibold">
                                <HomeIcon className="h-5 w-5" />
                            </Link>
                        )
                    } else {
                        return (
                            <Link to={item} key={i} className={`${i === paths.length - 1 ? 'opacity-60' : 'opacity-0'} font-semibold`}>
                                {item}
                            </Link>
                        )
                    }
                })
            }
        </Breadcrumbs >
    )
}

export default CurrentLocation