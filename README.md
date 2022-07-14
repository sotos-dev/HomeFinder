## Home Finder is a portfolio app where you can find available properties for rent or sale in the UK - It uses ZooplaAPI to get data.

## ## https://this-homedfinder.netlify.app/

## Functionality:

---

A) You can search, filter and sort available properties for rent or sale in the UK
Filter options:

1. Search area
2. Bedrooms - min/max
3. Price range - min/max
4. Property type - Detached, Semi-detached, terraced, flat etc

Sorting options:

1. Date listing was created - oldest/latest
2. Sort by price - from cheapest to most expensive and the opposite.

B) There is a 'Featured' page if you want to see what properties are featured by Zoopla.

C) You can search properties from the 'Homepage' or the 'Listings' page

## Technologies used:

---

Front-end: React with Next.js -> (For server side rendering)
APIs: RapidAPI -> ZooplaAPI -> (500 free calls per month)

## Libraries/Packages:

1. Axios -> for data fetching
2. millify -> to beautify properties prices
3. nprogress -> to show a thin loading bar on the top whilst data is fetched
4. Tailwind -> for rapid styiling

- Disclaimer:
  Zoopla does not expose an api endpoint for individual listings at this time.
  As far as I know you can't move a listing's data through Next's router either.
  This is the reason there is no 'individual' listing page for every listing that you can visit.

- Disclaimer2: This portfolio project has not been componetized greatly. The main point of this app initially was to display capabilities such as working with react and server side rendering (getServerSideProps), working with APIs and filtering and sorting results based on user's input.

Have fun with the website here is the link!

## https://this-homedfinder.netlify.app/
