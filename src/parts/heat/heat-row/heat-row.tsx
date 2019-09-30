import React, { Fragment } from "react";
import styles from "./heat-row.module.scss";

interface HeatRowProps {
  laneNumber: number;
  competitorName: string;
  clubShortName: string;
  result: string;
  position: number;
}
const HeatRow = (props: HeatRowProps) => {
  return <div className={styles.heat_row_container}>
    <tr className={styles.heat_row_row}>
      <td className={styles.lane_number_cell}>{props.laneNumber}</td>
      <td className={styles.competitor_name_cell}>{props.competitorName}</td>
      <td className={styles.club_short_name_cell}>{props.clubShortName}</td>
      <td className={styles.result_cell}>{props.result}</td>
      <td className={styles.position_cell}>{props.position}</td>
    </tr>
  </div>
}
