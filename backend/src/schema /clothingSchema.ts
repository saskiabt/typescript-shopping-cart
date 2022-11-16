import { graphql } from "graphql";
import { buildSchema } from "graphql";
const shoeSchema = buildSchema(`
    type Clothing {
        fields: () => ({ 
            	title: String
                category: String
	            year: Int
	            description: String 
	            culture: String
	            medium: String
                photo: String
	            designer: {
		            name: String
		            nationality: String 
		            DOB: String
	            }
            })
         }
`);

export { shoeSchema };
