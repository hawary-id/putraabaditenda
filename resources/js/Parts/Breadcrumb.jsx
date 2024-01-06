import { Link } from "@inertiajs/react";

export default function BreadCrumb({ items }) {
  return (
    <nav
      className="container w-full py-3 mx-auto text-gray-400"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex list-none">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <Link
              href={route(item.url)}
              className={`${
                index === items.length - 1 ? "text-blue-600 pointer-events-none" : "hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
            {index < items.length - 1 && <div className="px-1 font-light text-gray-400">/</div>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
