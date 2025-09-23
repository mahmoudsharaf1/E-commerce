import {spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: spacing.md,
    },
    listContainer: {
        columnGap: spacing.xs,
        rowGap: spacing.md,
        flexGrow: 1,
    },
    column: {
        columnGap: spacing.xs,
    },
    badgeContainer:{
        position: 'relative'
    },
    badge: {
        position: 'absolute',
        top: -3,
        right: -3,
        backgroundColor: 'red',
        borderRadius: 7.5,
        minWidth: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },

});