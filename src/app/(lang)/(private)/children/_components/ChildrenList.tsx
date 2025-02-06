"use client";

import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import useGetUsers from "@/core/services/users/useGetUsers";
import React from "react";
import ListComponent from "./ListComponent";

const ChildrenList: React.FC = () => {
	const {
		data: users,
		isFetching: isLoadingChildren,
		refetch,
	} = useGetUsers();

	return (
		<>
			{isLoadingChildren ? (
				<div className="h-16">
					<Spinner />
				</div>
			) : (
				<ListComponent users={users} />
			)}
			<Button className="m-3" onClick={refetch}>
				Refetch
			</Button>
		</>
	);
};

export default ChildrenList;
