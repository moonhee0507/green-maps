import React from 'react';
import { List } from './List';
import { ButtonGroup } from './ButtonGroup';
import type { Like } from '../../../../../server/models/User';

export { Form };

function Form({ likeList }: { likeList: Like[] }) {
    return (
        <form>
            <List likeList={likeList} />
            <ButtonGroup />
        </form>
    );
}
