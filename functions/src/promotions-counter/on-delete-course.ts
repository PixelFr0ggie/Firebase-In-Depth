import * as functions from 'firebase-functions';
import {firestore} from 'firebase-admin';
import FieldValue = firestore.FieldValue;
import {db} from '../init';

export default async (snap, context) => {

    functions.logger.debug(`Running update course trigger for courseId ${context.params.courseId}`);

    const course = snap.data();

    if (!course.promo) {
        return;
    }

    return db.doc(`courses/stats`).update({
        totalPromo: FieldValue.increment(-1)
    });
};
