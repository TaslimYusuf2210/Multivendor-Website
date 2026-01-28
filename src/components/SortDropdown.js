export default function SortDropdown({ onSortChange }) {
    return (
        <select 
            onChange={(e) => onSortChange(e.target.value)}
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#159047] bg-white cursor-pointer"
        >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Most Recent</option>
        </select>
    );
}