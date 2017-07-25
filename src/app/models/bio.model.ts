export interface Bio {
  bio: string;
  user_id: number;
  targets_list: Array<string>;
}


export interface Update_Bio {
	bio: string;
	user_id: number;
	target: string;
}