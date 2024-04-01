const stripMentionsFromRepoDesc = description => description?.replace(/@\w+/g, '') || description;
