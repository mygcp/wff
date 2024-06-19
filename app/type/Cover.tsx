interface Cover {
    result: "ok";
    response: "entity";
    data: {
        id: string;
        type: "cover_art";
        attributes: {
            description: string;
            volume: string;
            fileName: string;
            locale: string;
            createdAt: string; // ISO 8601 date string
            updatedAt: string; // ISO 8601 date string
            version: number;
        };
        relationships: {
            id: string;
            type: "manga" | "user"; // Union type for "manga" or "user"
        }[];
    };
}

export default Cover;
