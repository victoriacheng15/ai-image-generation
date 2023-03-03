import Card from "./Card";

function RenderCard({ data, title }: RenderCardProp) {
	return (
		<>
			{data?.length > 0 ? (
				<>
					{data.map((post) => (
						<Card key={post._id} {...post} />
					))}
				</>
			) : (
				<h2 className="mt-5 text-xl font-bold text-blue-800">{title}</h2>
			)}
		</>
	);
}

export default RenderCard;
