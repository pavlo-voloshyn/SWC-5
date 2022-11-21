export interface Order {
  id?: number,
  serviceType?: number,
  isUrgent? : boolean,
  status?: number,
  passportId?: number,
  dateCreated?: string
}
