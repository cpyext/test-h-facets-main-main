import {
  Facets,
  ResultsCount,
  SearchBar,
  StandardCard,
  VerticalResults,
  Geolocation,
  HierarchicalFacet,
} from "@yext/search-ui-react";

const SearchPage = () => {
  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
        <SearchBar />
        <div className="flex">
          <Facets hierarchicalFieldIds={["c_categories"]} />
          <VerticalResults CardComponent={StandardCard} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
