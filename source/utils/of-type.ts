import ow from '..';
import {BasePredicate} from '../predicates/base-predicate';

/**
Test all the values in the collection against a provided predicate.

@hidden
@param source Source collection to test.
@param predicate Predicate to test every item in the source collection against.
*/
export default <T>(source: IterableIterator<T> | Set<T> | T[], predicate: BasePredicate<T>): boolean | string => {
	try {
		for (const item of source) {
			ow(item, 'item', predicate);
		}

		return true;
	} catch (error: unknown) {
		return (error as Error).message;
	}
};
