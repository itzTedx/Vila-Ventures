type PopulateBucketUrlParams = {
	endpoint: string;
	bucketName: string;
	objectKey: string;
};

export function populateBucketUrl({
	endpoint,
	bucketName,
	objectKey,
}: PopulateBucketUrlParams): string {
	const normalizedEndpoint = endpoint.replace(/\/+$/, "");
	const normalizedBucketName = bucketName.replace(/^\/+|\/+$/g, "");
	const normalizedObjectKey = objectKey.replace(/^\/+/, "");
	const encodedObjectKey = normalizedObjectKey
		.split("/")
		.map((segment) => encodeURIComponent(segment))
		.join("/");

	return `${normalizedEndpoint}/${normalizedBucketName}/${encodedObjectKey}`;
}
