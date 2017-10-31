
import * as React from 'react';
import { View, Text } from 'react-native'
import { AppState } from '../../../data';
import { ReportItemViewData } from './ReportItemViewData';
import ZodiacSign from '../zodiacSign';

interface ReportItemProps {
    report: ReportItemViewData
}

export default class ReportItem extends React.PureComponent<ReportItemProps, AppState> {
    render() {
        const { report } = this.props;

        return (
            <View>
                <ZodiacSign sign={report.sign}></ZodiacSign>
                <Text>{report.id}</Text>
                <Text>{report.text}</Text>
            </View>
        );
    }
}
