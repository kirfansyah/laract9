import { Link } from "@inertiajs/inertia-react";


const Paginator = ({ meta }) => {
    console.log(meta)
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group grid grid-cols-2">

            <div className="btn-group">
                <Link href={prev} className="btn btn-outline">Previous page</Link>
                <button className="btn btn-outline">{current}</button>
                <Link className="btn btn-outline">Next</Link>
            </div>
        </div>
    )
}

export default Paginator